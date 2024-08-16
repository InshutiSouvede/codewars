function whatCentury(year)
{
  const century = String(Math.ceil(year/100))
  return `${century}${century.endsWith('1') && century!=='11'?"st":century.endsWith('2')&& century!=='12'?"nd":century.endsWith('3')&& century!=='13'?"rd":"th"}`
}