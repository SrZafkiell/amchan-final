import { MagnifyingGlass } from 'react-loader-spinner';

export const Loader = () => {
    return (
        <MagnifyingGlass
            visible={true}
            height="150"
            width="150"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor='#c0efff'
            color='#3366CC'
        />
    )
};