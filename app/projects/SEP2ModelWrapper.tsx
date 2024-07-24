"use client"; // Mark this file as a Client Component

import React from 'react';
import SEP2Model from './SEP2Model';

type SEP2ModelWrapperProps = {
  className?: string;
};

const SEP2ModelWrapper: React.FC<SEP2ModelWrapperProps> = ({ className }) => {
  return <SEP2Model className={className} />;
};

export default SEP2ModelWrapper;
