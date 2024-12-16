import React from "react";

const SocialsSection = () => {
  const iconStyle = {
    height: "100px",
    width: "auto",
  };

  return (
    <section className="socials-section">
      <ul style={{ display: "flex", listStyleType: "none", padding: 0 }}>
        <li style={{ marginRight: "10px" }}>
          <a
            href="https://x.com/sillysosighaha"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src={"/icons/x.png"}
              alt="Silly sosig x.com"
              style={iconStyle}
            />
          </a>
        </li>
        <li style={{ marginRight: "10px" }}>
          <a
            href="https://t.me/sillysosig"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src={"/icons/telegram.png"}
              alt="Twitter"
              style={iconStyle}
            />
          </a>
        </li>
        <li>
          <a
            href="https://dexscreener.com/solana/S1LH3uUmMzVxpjB2FkamrqQ6kZKwHAT7PrNgSn6fnWW"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src={"/icons/dexscreener.png"}
              alt="Instagram"
              style={iconStyle}
            />
          </a>
        </li>
      </ul>
    </section>
  );
};
export default SocialsSection;
