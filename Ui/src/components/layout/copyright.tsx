import React from 'react';

interface CopyrightProps {
  companyName?: string;
  year?: number;
}

const Copyright: React.FC<CopyrightProps> = ({
  companyName = 'Hendra Cloud, Inc',
  year = new Date().getFullYear()
}) => {
  return (
    <div className="text-xs text-gray-400 text-center">
      &copy; {year} {companyName}. Semua hak dilindungi undang-undang.
    </div>
  );
};

export default Copyright;
