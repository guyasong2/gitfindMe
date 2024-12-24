"use client";

import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";

interface GithubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  public_repos: number;
  followers: number;
  following: number;
  bio: string;
  blog: string;
  location: string;
}

export default function SearchUser() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<GithubUser | null>(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setError("");
    setUser(null);
    if (!username) {
      setError("Please enter a Github username");
      return;
    }
    try {
      const res = await axios.get<GithubUser>(
        `https://api.github.com/users/${username}`
      );
      setUser(res.data);
    } catch (err: unknown) {
      if(axios.isAxiosError(err)) {
        if (err.response && err.response.status === 404) {
            setError("User not Found");
        } else {
            setError("An error occured while fetching user")
        }
      } else {
        setError("An unexpected error occured")
      }
    }
  };

  return (
    <>
      <section>
        <form className="w-[90%] sm:w-[50%] mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <AiOutlineSearch className="w-4 h-4 text-gray-500" />
            </div>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSearch();
                }
              }}
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
              placeholder="Search Github Profile and hit enter"
              required
            />
          </div>
        </form>
      </section>

      <section>
        {error && <p className="text-red-500 text-center">{error}</p>}

        {user && (
          <div className="bg-gray-100 w-[90%] sm:w-[70%] mx-auto mt-5 shadow-md rounded-md p-2">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="">
                <Image
                  src={user.avatar_url}
                  alt="userImage"
                  className="w-full rounded-lg"
                  width={200}
                  height={200}
                />
              </div>
              <div className="pt-5">
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p>{user.bio}</p>
                <div className="">
                  <p>
                    <strong>Username:</strong>
                    <a
                      href={user.html_url}
                      target="_black"
                      rel="noreferrer"
                      className="text-blue-500"
                    >
                      {user.login}
                    </a>
                  </p>

                  <p>
                    <strong>Repositories:</strong>
                    {user.public_repos}
                  </p>
                  <p>
                    <strong>Followers:</strong>
                    {user.followers}
                  </p>
                  <p>
                    <strong>Following:</strong>
                    {user.following}
                  </p>
                  <p>
                    <strong>Blog</strong>
                    <a
                      href={user.html_url}
                      target="_black"
                      rel="noreferrer"
                      className="text-blue-500"
                    >
                      {user.blog}
                    </a>
                  </p>
                  <p>
                    <strong>Country:</strong>
                    {user.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
