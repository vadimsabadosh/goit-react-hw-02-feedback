import React from 'react';
import PropsTypes from 'prop-types';
export default function Section({ title, children }) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
Section.propTypes = {
  title: PropsTypes.string.isRequired,
  children: PropsTypes.node.isRequired,
};
