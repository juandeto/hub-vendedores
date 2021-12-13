import  { FC } from 'react'; 
import Button from 'components/basics/Button'

const Component: FC = function() {
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
                cta={() => 'hola'}
            />
        </span>
    )
}

export default Component;