import Image from 'next/image';
import { useI18n } from '../../../locales';
import { Pronunciation } from '../../Pronunciation';
import { Container, Paragraph, Section } from './styles';

export const Intro = () => {
  const { scopedT } = useI18n();
  const t = scopedT('pages.about.intro');

  return (
    <Container>
      <Section>
        <Image
          alt='DiegoDomingues'
          src='/static/images/eu.webp'
          width='1080'
          height='1920'
          placeholder='blur'
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC'
          priority
        />
      </Section>
      <Section>
        <Paragraph
          css={{
            marginTop: '1rem',
            '@bp2': { marginTop: '-0.375rem' }
          }}
        >
          <strong>{t('1')}</strong>
          {t('2', {
            pronunciation: <Pronunciation />,
            link: (
              <strong>
                <a
                  href='https://scratch.mit.edu/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Scratch
                </a>
              </strong>
            )
          })}
        </Paragraph>
        <Paragraph dangerouslySetInnerHTML={{ __html: t('3') }} />
        <Paragraph dangerouslySetInnerHTML={{ __html: t('4') }} />
      </Section>
    </Container>
  );
};
