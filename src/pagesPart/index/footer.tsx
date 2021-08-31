import { FunctionComponent } from 'react'

interface IProps {

}

const Component: FunctionComponent<IProps> = ({ }) => {
    return (
        <footer>
            <div className="owners">
                <h6>Colaboradores</h6>
                <ul>
                    <li><a href="#">Alysson</a></li>
                    <li><a href="#">Amanda</a></li>
                    <li><a href="#">Letícia</a></li>
                    <li><a href="#">Rogério</a></li>
                    <li><a href="#">Joicemeiry</a></li>
                    <li><a href="#">Júlia</a></li>
                    <li><a href="#">Tamyres</a></li>
                </ul>
            </div>

            <div className="copyright">
                <p>Copyright © 2021.</p>
            </div>
        </footer>
    )
}


export default Component