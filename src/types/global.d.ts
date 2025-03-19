import axios from 'axios';

declare module 'axios' {
    export interface AxiosResponse<T = any> extends Promise<T> { }
    }

declare module '*.png' {
    const value: import ('react-native').ImageSourcePropType;
    export default value;
}

declare module '*.jpg' {
    const value: import ('react-native').ImageSourcePropType;
    export default value;
}

