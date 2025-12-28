'use client';

import dynamic from 'next/dynamic';
import hiAnimation from './Hi.json';

// Dynamically import lottie-react with SSR disabled
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const LottieAnimation = () => {
    return (
        <Lottie 
            animationData={hiAnimation} 
            loop={true} 
            style={{ width: '100%', height: '100%' }}
        />
    );
};

export default LottieAnimation;
