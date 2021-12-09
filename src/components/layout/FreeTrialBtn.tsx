import  { FC } from 'react'; 
import Button from 'components/basics/Button'

const Component: FC = ( ) => {

    return (
        <span className="freeTrial_btn">
            <Button
                type="primary"
                label="PROBAR GRATIS"
                cta={() => console.log('probar gratois')}
            />
        </span>
    )
}

export default Component;