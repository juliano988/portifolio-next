import styles from '../../styles/sections/section1/styles.module.scss';

export default function Section1() {
  return (
    <section className={styles.container}>
      <div className={styles.intro_div}>
        <p className={styles.synthetic_tippy}>Want to know me better?<br /> <b>So click on my name!</b></p>
        <div className={styles.title}>
          <h1 id="jf-name" data-toggle="modal" data-target="#about-modal">Júlio Faria</h1>
          <h5>Full Stack Web Developer and Engineer</h5>
        </div>
        <div className={styles.projects}>
          <h5>Projects:</h5>
          <div>
            <button id='fccCurriculumProjectsModalBtn' type="button" className="btn btn-dark" data-toggle="modal"
              data-target="#fccCurriculumProjectsModal">freeCodeCamp<br /> Curriculum Projects</button>

            <a id="linkOthers" href="#sec-5"> Others</a>

          </div>
        </div>
      </div>
    </section>
  )
}