import  { FC } from 'react'; 
import { FaPlus, FaMinus } from 'react-icons/fa'

interface PropsSeeMoreLabel {
    index: number,
    isOpen: boolean
    handleSeeMore: () => void,
    id: string
}

const SeeMoreLabel: FC<PropsSeeMoreLabel> = function({index, isOpen, handleSeeMore, id}) {
    const handleKeyboardOption = (ev:React.KeyboardEvent<HTMLButtonElement>) => {
        if (ev.key === "Enter") {
            handleSeeMore()
          }
    }
    return (
        <button 
        type="button"
        tabIndex={0}
        aria-controls={id}
        aria-expanded={isOpen}
        className="seeMore__label" 
        onKeyDown={(e) => handleKeyboardOption(e)}
        onClick={handleSeeMore}>
            <span className="seeMore__moduloRef">{`Módulo ${index + 1}`}</span>
            <div className="seeMore__icon">
                {
                    isOpen ? <FaMinus /> : <FaPlus /> 
                }
            </div>
        </button>
    )
}

export default SeeMoreLabel;