export const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Thời gian hết hạn
    const expires = "expires=" + date.toUTCString(); // Định dạng expire
    document.cookie = `${name}=${value}; ${expires}; path=/`; // Thiết lập cookie
  };
  