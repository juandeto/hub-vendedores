import  { FC } from 'react'; 
import Button from 'components/basics/Button'

const Component: FC = ( ) => {
    const styles = {
        padding: "8px 32px",
        fontWeight: "bold"
    }
    return (
        <span className="freeTrial_btn">
            <Button
            styles={styles}
                type="primary"
                label="PROBAR GRATIS"
                cta={() => console.log('probar gratois')}
            />
        </span>
    )
}

export default Component;