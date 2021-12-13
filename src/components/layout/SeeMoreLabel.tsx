import  { FC } from 'react'; 
import { FaPlus, FaMinus } from 'react-icons/fa'

interface PropsSeeMoreLabel {
    index: number,
    isOpen: boolean
    handleSeeMore: () => void
}

const SeeMoreLabel: FC<PropsSeeMoreLabel> = function({index, isOpen, handleSeeMore}) {
    const handleKeyboardOption = (ev:React.KeyboardEvent<HTMLButtonElement>) => {

        if (ev.keyCode === 49 + index) {
            handleSeeMore()
           }
    }
    return (
        <button 
        type="button"
        className="seeMore__label" 
        onKeyDown={(e) => handleKeyboardOption(e)}
        onClick={handleSeeMore}>
            <span className="seeMore__moduloRef">{`Módulo ${index + 1}`}</span>
            <div className="seeMore__icon">
                {
                    isOpen ? <FaPlus /> : <FaMinus />
                }
            </div>
        </button>
    )
}

export default SeeMoreLabel;