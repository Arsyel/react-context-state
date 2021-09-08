export const FAKE_USER = {
  firstname: "Arsyel",
  lastname: "Abdulhakim",
  username: "arsyel",
  avatar: "https://www.gravatar.com/avatar/5c3dd2d257ff0e14dbd2583485dbd44b?s=32",
};

export const FAKE_EMAILS = [
  {
    id: 0,
    subject: "Hello Arsyel!",
    body: "Greetings, this is part of NewKama challenge, behold.",
  },
  {
    id: 1,
    subject: "React email test",
    body: "Testing such email tha you will read eventually.",
  },
  {
    id: 2,
    subject: "[Request approval]",
    body: "Please approve this merge, we should be fast for this feature.",
  },
];
FAKE_EMAILS.forEach((email) => {
  email["preview"] = email.body.substr(0, 46);
});

export const login = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === FAKE_USER.username && password === "admin") {
        resolve(FAKE_USER);
      }
      else {
        reject({ message: "Invalid username or password!" });
      }
    }, 250);
  });
};

export const getEmails = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(FAKE_EMAILS);
    }, 250);
  });
};