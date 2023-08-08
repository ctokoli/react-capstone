import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getData from '../Redux/covidSlice'

const CovidComponent = () => {
    const data = useSelector((state) => state.data);
    console.log(data)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData());
    })

    return ( 
        <>
            <h2>Hello Covid Component</h2>
        </>
     );
}
 
export default CovidComponent;