# 🚀 Remix Module Federation Example

This Nx monorepo is an example of Module Federation using Remix and RSPack in an Nx monorepo. The host app consumes two different remote apps called remote1 and remote2.

## 📚 Table of Contents

- [Introduction](#introduction)
- [Module Federation](#module-federation)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Hot Reload for Remotes](#hot-reload-for-remotes)
  - [Verifying Module Federation](#verifying-module-federation)
- [Contributing](#contributing)
- [License](#license)

## 🌟 Introduction

This repository demonstrates how to set up and use Module Federation with Remix and RSPack in an Nx monorepo. The host application dynamically loads and integrates modules from two remote applications, remote1 and remote2.

## 🧩 Module Federation

[Module Federation](https://webpack.js.org/concepts/module-federation/) is a feature of Webpack 5 that allows multiple independent builds to form a single application. Each build can expose and consume modules from other builds at runtime. This enables micro-frontends architecture, where different parts of an application can be developed and deployed independently.

## 🚀 Getting Started

### ✅ Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (>= 20.x)
- [Yarn](https://classic.yarnpkg.com/en/docs/install) (>= 1.22.x)

### 📦 Installation

1. Fork and Clone the Repository
2. Install Dependencies

### ▶️ Running the Application

To run the host application:

```sh
yarn nx serve host
```

### 🔄 Hot Reload for Remotes

To enable hot reload for the remote applications:

```sh
yarn nx serve host --devRemotes="remote1,remote2"
```

### 🔍 Verifying Module Federation

To verify that Module Federation is working correctly, follow these steps:

1. Fork and Clone the Repository
2. Install Dependencies
3. Run the Host Application
4. Make Changes to a Remote Application

Open any file in remote1 or remote2, make some changes, and save the file. For example, you can modify `Remote1.tsx`.

6. Build the Remote Application
7. Verify Changes in the Host Application

The host application should automatically pull the changes from the remote application without needing a restart. This demonstrates the dynamic nature of Module Federation, where the host application can consume updates from remote applications at runtime.

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
