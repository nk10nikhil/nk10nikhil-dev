import React, { useState, useCallback, useEffect, useRef } from 'react'

function PasswordGenerator() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false)
  const [lowerStrAllowed, setLowerStrAllowed] = useState(false)
  const [upperStrAllowed, setUpperStrAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, password.length)
    window.navigator.clipboard.writeText(password)
  }, [password])

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let lowerStr = "abcdefghijklmnopqrstuvwxyz"
    let upperStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let num = "0123456789"
    let special = "!@#$%^&*()-_=+[{]};:'\",<.>/?"
    let str = ""

    if (lowerStrAllowed) {
      str += lowerStr
    }
    if (upperStrAllowed) {
      str += upperStr
    }
    if (numberAllowed) {
      str += num
    }
    if (specialCharAllowed) {
      str += special
    }

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length))
    }

    setPassword(pass)

  }, [length, numberAllowed, specialCharAllowed, setPassword, lowerStrAllowed, upperStrAllowed])

  useEffect(() => {
    passwordGenerator()
  } , [length, numberAllowed, specialCharAllowed, setPassword, lowerStrAllowed, upperStrAllowed, passwordGenerator])

  return (

      <div className="w-[500px] bg-[#ffffff] rounded-lg shadow-lg justify-center items-center mx-auto mt-20">
        <p className="font-bold text-center text-4xl px-10 py-6">
          Password Generator
        </p>
        <div className="m-5">

          <div className="flex">
            <input
              type="text"
              placeholder="Password"
              value={password}
              readOnly
              ref={passwordRef}
              className="w-full h-[60px] text-[#000000] bg-[#878787] text-[1.06rem] font-medium rounded-md border border-black px-4 tracking-widest mr-2"/>
            <button 
              // onClick={() => navigator.clipboard.writeText(password)}
              onClick={copyPassword}
              className="font-bold text-[17px] cursor-pointer border-none rounded-[0.75em] bg-black">
              <span className="block box-border border-2 border-black rounded-[0.75em] px-6 py-3 bg-[#878787] text-black transform -translate-y-1 transition-transform duration-100 ease-in hover:-translate-y-[0.33em] active:translate-y-0">
                Copy
              </span>
            </button>
          </div>

          <div className="mt-6">
            <label className="block font-semibold text-lg">Password Length</label>
            <input
              type="range"
              min="8"
              max="32"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full mt-2 cursor-pointer"
            />
            <span className="text-black text-[1.06rem] font-medium">{length}</span>
          </div>

          <div className="mt-6 mb-5">
            <label className="block font-semibold text-lg">Password Settings</label>

            <ul className="flex flex-wrap mt-4">

              <li className="flex items-center mb-4 w-1/2">
                <input 
                  type="checkbox"
                  id="lowercase" 
                  defaultChecked={lowerStrAllowed}
                  onChange={() => setLowerStrAllowed((prev) => !prev)} 
                  className="h-4 w-4 cursor-pointer accent-[#46496E]" />
                <label htmlFor="lowercase" className="cursor-pointer text-black pl-2">Lowercase (a-z)</label>
              </li>

              <li className="flex items-center mb-4 w-1/2">
               <input 
                  type="checkbox"
                  id="uppercase" 
                  defaultChecked={upperStrAllowed}
                  onChange={() => setUpperStrAllowed((prev) =>!prev)}
                  className="h-4 w-4 cursor-pointer accent-[#46496E]" />
                <label htmlFor="uppercase" className="cursor-pointer text-black pl-2">Uppercase (A-Z)</label>
              </li>

              <li className="flex items-center mb-4 w-1/2">
               <input 
                  type="checkbox"
                  id="numbers" 
                  defaultChecked={numberAllowed}
                  onChange={() => setNumberAllowed((prev) =>!prev)}
                  className="h-4 w-4 cursor-pointer accent-[#46496E]" />
                  <label htmlFor="numbers" className="cursor-pointer text-black pl-2">Numbers (0-9)</label>
              </li>

              <li className="flex items-center mb-4 w-1/2">
               <input 
                  type="checkbox"
                  id="special" 
                  defaultChecked={specialCharAllowed}
                  onChange={() => setSpecialCharAllowed((prev) =>!prev)}
                  className="h-4 w-4 cursor-pointer accent-[#46496E]" />
                  <label htmlFor="special" className="cursor-pointer text-black pl-2">Special Characters (!@#$%^&*)</label>
              </li>
            </ul>
          </div>

          <button onClick={passwordGenerator} className="w-full text-black bg-[#444444] text-[1.06rem] font-semibold uppercase py-3 rounded-md mt-4 hover:bg-[#878787] cursor-pointer">
            Generate Password *
          </button>
          <div className="mt-4 mb-4 pb-4">
            <p className="text-gray-500 text-xs mt-2">
              * Passwords are case-sensitive and may contain special characters.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              * Passwords are not stored or transmitted securely.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              * This password generator is not responsible for protecting your information.
            </p>
          </div>
        </div>
      </div>
  )


}

export default PasswordGenerator