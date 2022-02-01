let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = 
    [ 
        '"We grow fearless when we do the things we fear." -Robin Sharma',
        ' "And, when you want something, all the universe conspires in helping you to achieve it." -Paulo Coelho, The Alchemist',
        '"When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one which has been opened for us." -Helen Keller',
        '"If you hear a voice within you say "you cannot paint", then by all means paint and that voice will be silenced." -Vincent Van Gogh',
        '"Love is an untamed force. When we try to control it, it destroys us. When we try to imprison it, it enslaves us. When we try to understand it, it leaves us feeling lost and confused." -Paulo Coelho',
        '"You can not be great if you do not feel great. Make exceptional health your number one priority." -Robin Sharma',
        '"The secret of getting ahead is getting started." -Mark Twain',
        '"All our dreams can come true if we have the courage to pursue them." -Walt Disney',
        '"Whatever you are, be a good one." -Abraham Lincoln',
        '"The big secret in life is that there is no secret. Whatever your goal, you can get there if you are willing to work." -Oprah Winfrey',
        '"The best way to appreciate your job is to imagine yourself without one." -Oscar Wilde',
        '"Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten." -Neil Gaiman',
    ];
btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})