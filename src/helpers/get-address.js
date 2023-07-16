export async function getAdrdess(ip = "8.8.8.8") {
  const response = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_xjyhjAJod0RL7DggkuY5cT1izJ3A1&ipAddress=${ip}`
  );
  return await response.json();
}
