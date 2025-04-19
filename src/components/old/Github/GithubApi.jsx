import React from "react";
import { useLoaderData } from "react-router";

function GithubApi() {
  const data = useLoaderData();

  return (
    <div className="flex items-center py-10 justify-center bg-gray-900 p-4 mx-10 rounded-2xl">
      <div className="max-w-4xl w-full bg-gray-800 rounded-2xl shadow-lg overflow-hidden md:flex md:items-center md:justify-between">
        {/* Left Side: Avatar */}
        <div className="md:w-1/3 p-6 flex justify-center">
          <img
            src={data.avatar_url}
            alt="GitHub Avatar"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-purple-500"
          />
        </div>

        {/* Right Side: GitHub Info */}
        <div className="md:w-2/3 p-6">
          <h2 className="text-3xl font-bold text-white mb-4">
            {data.name || "Nikhil Kumar"}
          </h2>
          <p className="text-gray-400 text-lg mb-6">{data.bio || "No bio available."}</p>

          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-purple-500 font-semibold mr-2">📍</span>
              <p className="text-gray-300">
                {data.location || "Location not specified"}
              </p>
            </div>

            <div className="flex items-center">
              <span className="text-purple-500 font-semibold mr-2">📂</span>
              <p className="text-gray-300">
                Public Repositories: {data.public_repos}
              </p>
            </div>

            <div className="flex items-center">
              <span className="text-purple-500 font-semibold mr-2">👥</span>
              <p className="text-gray-300">Followers: {data.followers}</p>
            </div>

            <div className="flex items-center">
              <span className="text-purple-500 font-semibold mr-2">🔗</span>
              <a
                href={data.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:text-purple-400 transition duration-300"
              >
                Visit GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GithubApi;

export const GithubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/nk10nikhil");
  const data = await response.json();
  return data;
};