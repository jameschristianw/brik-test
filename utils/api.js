import React from 'react';
import axios from 'axios';
import Config from '../config/config';

const baseUrl = Config.baseUrl;

const get = async url => {
  const completeUrl = `${baseUrl}${url}`;
  return await axios.get(completeUrl);
};

const post = async (url, body = {}) => {
  const completeUrl = `${baseUrl}${url}`;

  console.log(`post ${JSON.stringify(body)}`);

  return await axios.post(completeUrl, JSON.stringify(body), {
    headers: {'Content-Type': 'application/json'},
  });
};

const put = async (url, body) => {
  const completeUrl = `${baseUrl}${url}`;

  return await axios.put(completeUrl);
};

export default {get, post, put};
