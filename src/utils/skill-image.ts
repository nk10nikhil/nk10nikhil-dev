// Design & Graphics
import adobeXd from "@/assets/svg/skills/adobe-xd.svg";
import adobeaudition from "@/assets/svg/skills/adobeaudition.svg";
import afterEffects from "@/assets/svg/skills/after-effects.svg";
import blender from "@/assets/svg/skills/blender.svg";
import canva from "@/assets/svg/skills/canva.svg";
import figma from "@/assets/svg/skills/figma.svg";
import gimp from "@/assets/svg/skills/gimp.svg";
import illustrator from "@/assets/svg/skills/illustrator.svg";
import lightroom from "@/assets/svg/skills/lightroom.svg";
import photoshop from "@/assets/svg/skills/photoshop.svg";
import picsart from "@/assets/svg/skills/picsart.svg";
import premierepro from "@/assets/svg/skills/premierepro.svg";
import sketch from "@/assets/svg/skills/sketch.svg";

// Frontend Frameworks & Libraries
import angular from "@/assets/svg/skills/angular.svg";
import react from "@/assets/svg/skills/react.svg";
import vue from "@/assets/svg/skills/vue.svg";
import svelte from "@/assets/svg/skills/svelte.svg";
import nextJS from "@/assets/svg/skills/nextJS.svg";
import nuxtJS from "@/assets/svg/skills/nuxtJS.svg";

// Styling & UI
import bootstrap from "@/assets/svg/skills/bootstrap.svg";
import bulma from "@/assets/svg/skills/bulma.svg";
import css from "@/assets/svg/skills/css.svg";
import html from "@/assets/svg/skills/html.svg";
import materialui from "@/assets/svg/skills/materialui.svg";
import tailwind from "@/assets/svg/skills/tailwind.svg";
import vuetifyjs from "@/assets/svg/skills/vuetifyjs.svg";

// Programming Languages
import c from "@/assets/svg/skills/c.svg";
import cplusplus from "@/assets/svg/skills/cplusplus.svg";
import csharp from "@/assets/svg/skills/csharp.svg";
import dart from "@/assets/svg/skills/dart.svg";
import go from "@/assets/svg/skills/go.svg";
import java from "@/assets/svg/skills/java.svg";
import javascript from "@/assets/svg/skills/javascript.svg";
import julia from "@/assets/svg/skills/julia.svg";
import kotlin from "@/assets/svg/skills/kotlin.svg";
import php from "@/assets/svg/skills/php.svg";
import python from "@/assets/svg/skills/python.svg";
import ruby from "@/assets/svg/skills/ruby.svg";
import swift from "@/assets/svg/skills/swift.svg";
import typescript from "@/assets/svg/skills/typescript.svg";

// Databases
import memsql from "@/assets/svg/skills/memsql.svg";
import mongoDB from "@/assets/svg/skills/mongoDB.svg";
import mysql from "@/assets/svg/skills/mysql.svg";
import postgresql from "@/assets/svg/skills/postgresql.svg";

// Cloud & DevOps
import aws from "@/assets/svg/skills/aws.svg";
import azure from "@/assets/svg/skills/azure.svg";
import docker from "@/assets/svg/skills/docker.svg";
import gcp from "@/assets/svg/skills/gcp.svg";
import kubernetes from "@/assets/svg/skills/kubernetes.svg";
import linux from "@/assets/svg/skills/linux.svg";
import nginx from "@/assets/svg/skills/nginx.svg";

// Backend & APIs
import deno from "@/assets/svg/skills/deno.svg";
import django from "@/assets/svg/skills/django.svg";
import dotnet from "@/assets/svg/skills/dotnet.svg";
import dotnetcore from "@/assets/svg/skills/dotnetcore.svg";
import fastapi from "@/assets/svg/skills/fastapi.svg";
import fastify from "@/assets/svg/skills/fastify.svg";
import firebase from "@/assets/svg/skills/firebase.svg";
import graphql from "@/assets/svg/skills/graphql.svg";
import strapi from "@/assets/svg/skills/strapi.svg";

// Mobile Development
import capacitorjs from "@/assets/svg/skills/capacitorjs.svg";
import flutter from "@/assets/svg/skills/flutter.svg";
import ionic from "@/assets/svg/skills/ionic.svg";

// Data Science & ML
import numpy from "@/assets/svg/skills/numpy.svg";
import opencv from "@/assets/svg/skills/opencv.svg";
import pandas from "@/assets/svg/skills/pandas.svg";
import pytorch from "@/assets/svg/skills/pytorch.svg";
import scikitlearn from "@/assets/svg/skills/scikit-learn.svg";
import sqlalchemy from "@/assets/svg/skills/sqlalchemy.svg";
import tensorflow from "@/assets/svg/skills/tensorflow.svg";

// Tools & Others
import coffeescript from "@/assets/svg/skills/coffeescript.svg";
import git from "@/assets/svg/skills/git.svg";
import haxe from "@/assets/svg/skills/haxe.svg";
import markdown from "@/assets/svg/skills/markdown.svg";
import matlab from "@/assets/svg/skills/matlab.svg";
import microsoftoffice from "@/assets/svg/skills/microsoftoffice.svg";
import selenium from "@/assets/svg/skills/selenium.svg";
import unity from "@/assets/svg/skills/unity.svg";
import vitejs from "@/assets/svg/skills/vitejs.svg";
import webix from "@/assets/svg/skills/webix.svg";
import wolframalpha from "@/assets/svg/skills/wolframalpha.svg";
import wordpress from "@/assets/svg/skills/wordpress.svg";

// Skill image mapping using Record for better type safety
const skillsMap: Record<string, string> = {
  // Design & Graphics
  "adobe xd": adobeXd,
  "adobe audition": adobeaudition,
  "after effects": afterEffects,
  blender,
  canva,
  figma,
  gimp,
  illustrator,
  lightroom,
  photoshop,
  picsart,
  "premiere pro": premierepro,
  sketch,

  // Frontend
  angular,
  react,
  vue,
  svelte,
  "next js": nextJS,
  nextjs: nextJS,
  "nuxt js": nuxtJS,
  nuxtjs: nuxtJS,

  // Styling
  bootstrap,
  bulma,
  css,
  html,
  materialui,
  "material ui": materialui,
  "material-ui": materialui,
  tailwind,
  tailwindcss: tailwind,
  vuetifyjs,
  vuetify: vuetifyjs,

  // Languages
  c,
  "c++": cplusplus,
  cpp: cplusplus,
  "c#": csharp,
  csharp,
  dart,
  go,
  golang: go,
  java,
  javascript,
  js: javascript,
  julia,
  kotlin,
  php,
  python,
  py: python,
  ruby,
  rb: ruby,
  swift,
  typescript,
  ts: typescript,

  // Databases
  memsql,
  mongoDB,
  mongo: mongoDB,
  mysql,
  postgresql,
  postgres: postgresql,

  // Cloud & DevOps
  aws,
  azure,
  docker,
  gcp,
  "google cloud": gcp,
  kubernetes,
  k8s: kubernetes,
  linux,
  nginx,

  // Backend
  deno,
  django,
  ".net": dotnet,
  dotnet,
  ".net core": dotnetcore,
  "dotnet core": dotnetcore,
  fastapi,
  fastify,
  firebase,
  graphql,
  strapi,

  // Mobile
  capacitorjs,
  capacitor: capacitorjs,
  flutter,
  ionic,

  // Data Science
  numpy,
  opencv,
  cv2: opencv,
  pandas,
  pd: pandas,
  pytorch,
  torch: pytorch,
  "scikit-learn": scikitlearn,
  "scikit learn": scikitlearn,
  sklearn: scikitlearn,
  sqlalchemy,
  tensorflow,
  tf: tensorflow,

  // Tools
  coffeescript,
  git,
  haxe,
  markdown,
  md: markdown,
  matlab,
  "microsoft office": microsoftoffice,
  office: microsoftoffice,
  selenium,
  unity,
  vitejs,
  vite: vitejs,
  webix,
  wolframalpha,
  "wolfram alpha": wolframalpha,
  wordpress,
  wp: wordpress,
};

/**
 * Get the SVG image for a skill by name
 * @param skill - The skill name (case-insensitive)
 * @returns The SVG image path or undefined if not found
 */
export const skillsImage = (skill: string): string | undefined => {
  const skillID = skill.toLowerCase().trim();
  return skillsMap[skillID];
};

/**
 * Get all available skill names
 * @returns Array of all skill names
 */
export const getAllSkillNames = (): string[] => {
  return Object.keys(skillsMap);
};

/**
 * Check if a skill exists in the mapping
 * @param skill - The skill name to check
 * @returns True if the skill exists
 */
export const hasSkill = (skill: string): boolean => {
  const skillID = skill.toLowerCase().trim();
  return skillID in skillsMap;
};

/**
 * Get skills by category
 */
export const getSkillsByCategory = () => {
  return {
    design: [
      "adobe xd",
      "adobe audition",
      "after effects",
      "blender",
      "canva",
      "figma",
      "gimp",
      "illustrator",
      "lightroom",
      "photoshop",
      "picsart",
      "premiere pro",
      "sketch",
    ],
    frontend: ["angular", "react", "vue", "svelte", "next js", "nuxt js"],
    styling: [
      "bootstrap",
      "bulma",
      "css",
      "html",
      "materialui",
      "tailwind",
      "vuetifyjs",
    ],
    languages: [
      "c",
      "c++",
      "c#",
      "dart",
      "go",
      "java",
      "javascript",
      "julia",
      "kotlin",
      "php",
      "python",
      "ruby",
      "swift",
      "typescript",
    ],
    databases: ["memsql", "mongodb", "mysql", "postgresql"],
    cloud: ["aws", "azure", "docker", "gcp", "kubernetes", "linux", "nginx"],
    backend: [
      "deno",
      "django",
      ".net",
      ".net core",
      "fastapi",
      "fastify",
      "firebase",
      "graphql",
      "strapi",
    ],
    mobile: ["capacitorjs", "flutter", "ionic"],
    dataScience: [
      "numpy",
      "opencv",
      "pandas",
      "pytorch",
      "sklearn",
      "sqlalchemy",
      "tensorflow",
    ],
    tools: [
      "coffeescript",
      "git",
      "haxe",
      "markdown",
      "matlab",
      "microsoft office",
      "selenium",
      "unity",
      "vitejs",
      "webix",
      "wolframalpha",
      "wordpress",
    ],
  };
};
