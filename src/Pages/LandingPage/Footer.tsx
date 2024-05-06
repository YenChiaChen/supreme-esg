import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ExpandingFooter: React.FC = () => {
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // 檢查是否滑到頁面底部
            const bottomReached = window.innerHeight + window.scrollY >= document.body.offsetHeight;
            if (bottomReached) {
                setExpanded(true);
            } else {
                setExpanded(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.footer
            initial={{ height: 50 }} // 初始高度
            animate={{ height: expanded ? 200 : 50 }} // 展開時高度和縮小時高度
            transition={{ duration: 0.5 }} // 過渡動畫時間
            style={{ width: '100%', background: 'lightgrey' }}
        >
            <div style={{ padding: 10 }}>
                <p>Always visible content.</p>
                {expanded && (
                    <div>
                        <p>More information that is shown when expanded.</p>
                        <p>Additional details can go here.</p>
                    </div>
                )}
            </div>
        </motion.footer>
    );
};

export default ExpandingFooter;
