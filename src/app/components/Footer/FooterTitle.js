/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const FooterTitle = ({ title, data}) => {
  return (
    <div className="footer_item">
      <h3 className="text-primary font-bold opacity-100 text-xl">
        {title}
      </h3>
      {data?.map((item, index) => (
        <a key={index} href="#" className="link link-hover">{item}</a>
      ))}
    </div>
  );
};

export default FooterTitle;
