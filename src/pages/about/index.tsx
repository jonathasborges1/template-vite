import React from 'react';

interface Props {
   children?: React.ReactNode;
}

const About: React.FC<Props> = ({ children, ...props }) => {
   return (
      <>{children}</>
   )
}

export default About;