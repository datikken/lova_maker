export const makeHttps = (str) => {
  return str.replace('http://', 'https://');
};

export const makeHttp = (str) => {
  return str.replace('https://', 'http://');
};

export const getDomain = (str) => {
  return str
    .replace('http://', '')
    .replace('https://', '')
    .replace('www.', '')
    .split(/[/?#]/)[0];
};

export const switchDomain = (link, domain) => {
  const linkDomain = getDomain(link);
  return link.replace(linkDomain, domain).replace('www.', '');
};
