import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

interface InfoProps {
    href: string;
    src: string;
    width?: number;
    height?: number;
}

const Info: React.FC<InfoProps> = ({href, src, width=100, height=100}) => {
    const alt = src.split('/').pop()?.split('.')[0] || 'Image';

    return (
        <Link href={href} className='info' target='_blank'>
            <Image width={width} height={height} src={src} alt={alt} />
        </Link>
    );
};

export default Info;