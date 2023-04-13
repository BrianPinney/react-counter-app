export default function Footer() {

const githubURL = "https://github.com/brianpinney"

    return (
        <footer>
            <p><small>&copy; 2023 Brian Pinney</small><br />
            <a href={githubURL} target="_blank" rel="noreferrer">See Code in Github</a></p>
        </footer>
    )
}