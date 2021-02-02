import SubHeader from 'js/components/SubHeader'
import SkillsSection from 'js/components/SkillsSection'
import Bio from 'js/components/Bio'
import Jobs from 'js/components/Jobs'
import Education from 'js/components/Education'
import { Grid } from '@material-ui/core'
import { Container } from 'next/app'
import ContentDivider from 'js/components/ContentDivider'
import PageSubTitle from 'js/components/PageSubTitle'

const Home = () => {
  return (
    <>
      <Container maxWidth="md">
        <Grid container justify="center">
          <Grid item>
            <SubHeader />
            <ContentDivider variant="middle" />
            <Bio />
            <PageSubTitle text="Skill Set" id="skills" />
            <SkillsSection />
            <PageSubTitle text="Experience" id="experience" />
            <Jobs />
            <PageSubTitle text="Education" />
            <Education />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Home
