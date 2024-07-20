import styles from "./Courses.module.css"

function Courses(){
    return(
        <div className={styles.wrapper}>
            <h2 className={styles.heading}>Full Time Courses</h2>
            <ol>
                <li>Full Stack Web Developement</li>
                <ul>
                    <li>Eligibility : 18-28 yrs</li>
                    <li>Duration : 30 weeks</li>
                </ul>
            </ol>
            <h2 className={styles.heading}>Part Time Courses</h2>
            <ol>
                <li>Full Stack Web Developement</li>
                <ul>
                    <li>Eligibility : 18-28 yrs</li>
                    <li>Duration : 30 weeks</li>
                </ul>
                <li> Data Analytics</li>
                <ul>
                    <li>Eligibility : 18-28 yrs</li>
                    <li>Duration : 30 weeks</li>
                </ul>
            </ol>
        </div>
    )
}

export default Courses