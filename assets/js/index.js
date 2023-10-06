// countdown
function makeTimer() {
    var endTime = new Date("1 January 2024 8:00:00 GMT+07:00");			
    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400); 
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $("#days").html(days + "<p class='mb-0 px-3 px-md-5 fs-32'>Days</p>");
    $("#hours").html(hours + "<p class='mb-0 px-3 px-md-5 fs-32'>Hours</p>");
    $("#minutes").html(minutes + "<p class='mb-0 px-3 px-md-5 fs-32'>Minutes</p>");
    $("#seconds").html(seconds + "<p class='mb-0 px-3 px-md-5 fs-32'>Seconds</p>");		

}

setInterval(function() { makeTimer(); }, 1000);

// bank select
const bankList = [
    {
        bank_code: "BCA",
        bank_name: "BANK BCA (014)",
        account_number: "8375180797",
        account_name: "Muhammad Fanny Al farizzy"
    },
    {
        bank_code: "BRI",
        bank_name: "BANK BRI (002)",
        account_number: "123123123",
        account_name: "Muhammad Fanny Al farizzy"
    }
]

function getBankName() {
    const selected_bank = bankList.filter((item) => {
        return item.bank_code.toUpperCase() === $('#bank-list').val().toUpperCase()
    })
    $('#bank-name').text(selected_bank[0].bank_name)
    $('#account-number').text(selected_bank[0].account_number)
    $('#account-name').text(selected_bank[0].account_name)
}

getBankName($('#bank-list').val().toUpperCase())

// copy bank number
const fallbackCopyTextToClipboard = (text) => {
    const textArea = document.createElement('textarea')
    textArea.value = text

    // Avoid scrolling to bottom
    textArea.style.top = '0'
    textArea.style.left = '0'
    textArea.style.position = 'fixed'

    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()

    document.execCommand('copy')

    document.body.removeChild(textArea)
}

const copyText = (text = $('#account-number').text()) => {
    console.log('asd', text)
    $('#copied-message').removeClass('d-none').addClass('d-block');
    setTimeout(function() {
        $('#copied-message').removeClass('d-block').addClass('d-none');
    }, 1000);
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text)
        return
    }

    navigator.clipboard.writeText(text)
}

// play audio
let i = 1
const audio = document.getElementById("playAudio");
if (audio.duration > 0 && !audio.paused) {
    //Its playing...do your job
    $('#music-icon').removeClass('fa-play')
    $('#music-icon').addClass('fa-pause')
} else {
    //Not playing...maybe paused, stopped or never played.
    $('#music-icon').removeClass('fa-pause')
    $('#music-icon').addClass('fa-play')
}
$('#play').click(function() {
    cekAudioIcon()
});
function cekAudioIcon() {
    if (audio.duration > 0 && !audio.paused) {
        //Its playing...do your job
        audio.pause();
        $('#music-icon').removeClass('fa-pause')
        $('#music-icon').addClass('fa-play')
    } else {
        //Not playing...maybe paused, stopped or never played.
        audio.play();
        $('#music-icon').removeClass('fa-play')
        $('#music-icon').addClass('fa-pause')
    }
}

$('#open-invitation').click(function(params) {
    cekAudioIcon();
    $('#cover').fadeOut("slow", function () {
        $('#cover').removeClass('d-block').addClass('d-none')
    })
    $('#hero').removeClass('d-none').addClass('d-flex')
    $('#groom-and-bride').removeClass('d-none').addClass('d-block')
    $('#pou').removeClass('d-none').addClass('d-block')
    $('#our-love-story').removeClass('d-none').addClass('d-block')
    $('#count-down').removeClass('d-none').addClass('d-block')
    $('#reception').removeClass('d-none').addClass('d-block')
    $('#reservation').removeClass('d-none').addClass('d-block')
    $('#wedding-gift').removeClass('d-none').addClass('d-block')
    $('#footer').removeClass('d-none').addClass('d-block')
    $('#music-button').removeClass('d-none').addClass('d-block')
    document.getElementById("hero").focus();
})