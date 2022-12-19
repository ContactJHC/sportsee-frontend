import './Spinner.css'

/**
 * Returns a spinner component including two rings
 * @returns {import('react').ReactElement}
 */

export default function Spinner() {
  return (
    <div class="overlay">
        <div class="loading">
            <div class="loading-spinner"></div>
            <div class="loading-spinner"></div>			
        </div>
    </div>
  )
}
