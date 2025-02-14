// Function to lock all options except the first one
function lockAllOptions() {
    const options = ['secretCodePoem', 'minigameQuiz', 'constellationOfUs'];
    options.forEach(optionId => {
        const option = document.getElementById(optionId);
        if (option) {
            option.style.pointerEvents = 'none';
            option.style.opacity = '0.5';
        }
    });
}

// Function to unlock the next option
function unlockNextOption(currentOptionId, nextOptionId) {
    const currentOption = document.getElementById(currentOptionId);
    const nextOption = document.getElementById(nextOptionId);
    
    if (currentOption && nextOption) {
        currentOption.addEventListener('click', function() {
            sessionStorage.setItem(nextOptionId + '_unlocked', 'true');
            nextOption.style.pointerEvents = 'auto';
            nextOption.style.opacity = '1';
        });
    }
}

// Function to restore unlocked options from sessionStorage
function restoreUnlockedOptions() {
    const options = ['secretCodePoem', 'minigameQuiz', 'constellationOfUs'];
    options.forEach(optionId => {
        if (sessionStorage.getItem(optionId + '_unlocked') === 'true') {
            const option = document.getElementById(optionId);
            if (option) {
                option.style.pointerEvents = 'auto';
                option.style.opacity = '1';
            }
        }
    });
}

// On page load, lock all options except the first one
document.addEventListener('DOMContentLoaded', function() {
    lockAllOptions();
    restoreUnlockedOptions();
    
    // Unlock sequence
    unlockNextOption('collagePoem', 'secretCodePoem');
    unlockNextOption('secretCodePoem', 'minigameQuiz');
    unlockNextOption('minigameQuiz', 'constellationOfUs');
});