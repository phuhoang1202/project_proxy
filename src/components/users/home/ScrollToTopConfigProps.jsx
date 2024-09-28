import RScrollToTop from 'react-scroll-to-top';

const ScrollToTop = ({
    smooth = true,
    top = 600,
    color = 'black',
    svgPath = 'M12 5v14l7-7-7-7z',
    width = '28',
    height = '28',
    viewBox = '0 0 24 24',
    component,
    style,
    className,
}) => {
    return (
        <RScrollToTop
            smooth={smooth}
            top={top}
            color={color}
            svgPath={svgPath}
            width={width}
            height={height}
            viewBox={viewBox}
            component={
                component || (
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='mx-auto size-6'
                    >
                        <path strokeLinecap='round' strokeLinejoin='round' d='m4.5 18.75 7.5-7.5 7.5 7.5' />
                        <path strokeLinecap='round' strokeLinejoin='round' d='m4.5 12.75 7.5-7.5 7.5 7.5' />
                    </svg>
                )
            }
            style={style}
            className={className}
        />
    );
};

export default ScrollToTop;