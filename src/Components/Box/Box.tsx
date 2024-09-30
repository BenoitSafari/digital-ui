import React from 'react';
import useClassName from '../../modules/ClassName/useClassName';
import type { SafariNodeWithChildren } from '../types';
import './Box.styles.css';

export interface BoxProps extends SafariNodeWithChildren {
    p?: null | 0 | 1 | 2 | 3;
    m?: null | 0 | 1 | 2 | 3;
    resizable?: boolean;
    fullWidth?: boolean;
    fullHeight?: boolean;
    direction?: 'row' | 'column';
    align?: 'start' | 'center' | 'end';
    justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
}

const Box = React.forwardRef<HTMLDivElement, BoxProps>(
    (
        {
            resizable = false,
            fullWidth = false,
            fullHeight = false,
            p = null,
            m = null,
            direction = 'column',
            align = 'start',
            justify = 'start',
            ...props
        }: BoxProps,
        ref,
    ) => {
        const className = useClassName(
            {
                resizable,
                fullWidth,
                fullHeight,
                p,
                m,
                direction,
                align,
                justify,
                ...props,
            },
            'SafariUi-Box',
        );

        return <div {...props} ref={ref} className={className} />;
    },
);

export default Box;