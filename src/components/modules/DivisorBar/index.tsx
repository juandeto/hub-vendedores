import  { FC } from 'react'; 
import Paragrapgh from 'components/basics/Paragraph'
import MediaLinks from 'components/layout/MediaLinks'
import LangSelector from 'features/language/LangSelector';
import { useTranslation } from 'react-i18next';


const DivisorBar: FC = function() {
  const { t } = useTranslation('modules');

  return <div className="divisorBar" role="presentation">
            <Paragrapgh paragraph={t('divisorBar.label')} />
            <LangSelector />
            <MediaLinks />
        </div>
}

export default DivisorBar;