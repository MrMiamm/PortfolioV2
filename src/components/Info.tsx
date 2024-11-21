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
    var alt = src.split('/').pop()?.split('.')[0] || 'Image';
    
    //Premiere lettre en majuscule
    alt = alt.charAt(0).toUpperCase() + alt.slice(1);
    alt = alt.replace(/[-_](.)/g, (_, char) => ' ' + char.toUpperCase());
    alt = alt.replace(/sql/gi, 'SQL');

    if (alt.length < 4) {
        alt = alt.toUpperCase();
    }

    return (
        <Link href={href} className='info' target='_blank'>
            <Image width={width} height={height} src={src} alt={alt} />
        </Link>
    );
};

export default Info;