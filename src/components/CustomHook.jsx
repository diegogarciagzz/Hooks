import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';
import { Loading } from './Loading';
import { Card } from './Card';

export const CustomHook = () => {
    const { counter, decrement, increment } = useCounter(1);
    const {data, hasError, isLoading} = useFetch(`https://fakestoreapi.com/products/${counter}`);
    
    return (
        <>
            <h1>Información de Producto</h1>
            <hr/>
            <h2>{data?.title}</h2>
            
            {isLoading ? (
                <Loading/>
            ) : (
                <Card 
                    id={counter} 
                    name={data?.title}
                    sprites={[
                        data?.image,       
                    ]} 
                />
            )}
            
            <button className='btn btn-danger' onClick={() => decrement()}>Anterior</button>
            <button className='btn btn-primary' onClick={() => increment()}>Siguiente</button>
        </>
    );
};
