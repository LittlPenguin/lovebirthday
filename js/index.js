// 开始加载
window.addEventListener('load', function () {
    $('body').css('display', 'flex').css('overflow', 'unset')
    $('.container55').css('display', 'flex')
    $('.loding').hide()

    // 结束加载
    var inputTime = +new Date('2023-5-07 0:0:0')
    var time = document.querySelector('.time')
    var hour = document.querySelector('.hour')
    var min = document.querySelector('.min')
    var cent = document.querySelector('.cent')
    var dates = document.querySelector('.date')
    var span = document.querySelector('span')
    var julsj = document.querySelector('.julsj')
    var da = this.document.querySelector('.da')
    var ho = this.document.querySelector('.ho')
    var mi = this.document.querySelector('.mi')
    var se = this.document.querySelector('.se')
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    timer()
    function timer() {
        var date = new Date()
        var nowTime = +new Date()
        var times = (inputTime - nowTime) / 1000;
        h = date.getHours()
        h = h < 10 ? '0' + h : h
        m = date.getMinutes()
        m = m < 10 ? '0' + m : m
        var s = date.getSeconds()
        var pa = ''
        if (h < 12) {
            pa = 'Am'
        } else {
            pa = 'Pm'
        }
        // 距离
        var jld = parseInt(times / 60 / 60 / 24)//天
        jld = jld < 10 ? '0' + jld : jld
        da.innerHTML = jld + '天'
        var jlh = parseInt(times / 60 / 60 % 24)//时
        jlh = jlh < 10 ? '0' + jlh : jlh
        ho.innerHTML = jlh + '时'
        var jlm = parseInt(times / 60 % 60)//分
        jlm = jlm < 10 ? '0' + jlm : jlm
        mi.innerHTML = jlm + '分'
        var jls = parseInt(times % 60)//秒
        jls = jls < 10 ? '0' + jls : jls
        se.innerHTML = jls + '秒'
        hour.style.transform = `rotate(${h * 30}deg)`
        min.style.transform = `rotate(${m * 6}deg)`
        cent.style.transform = `rotate(${s * 6}deg)`
        time.innerHTML = h + ':' + m + ` ${pa}`
        dates.innerHTML = days[date.getDay()] + ', ' + month[date.getMonth()]
        span.innerHTML = date.getDate()
        if (times <= 0) {
            $('.container55').css('display', 'none')
            $('.container').css('display', 'block')
            clearInterval(dddbc)
        }
    }
    var dddbc = setInterval(timer,200)
})
$(() => {
    var kaitouwzbl = 0
    // container2
    function shij() {
        kaitouwzbl = 0
        var bannerkaitouwz = setInterval(() => {
            $('.bannerkt1').eq(0).addClass('nactive')
            $('.bannerkaitou').eq(kaitouwzbl).children().stop().fadeIn().parent().siblings('.bannerkaitou').children().stop().fadeOut()
            kaitouwzbl++
            if (kaitouwzbl >= $('.bannerkaitou').length) {
                clearInterval(bannerkaitouwz)
                $('.container2').hide()
                $('body').addClass('bdysh')
                container3()
            }
        }, 3000);
    }
    // container3
    function container3() {
        $('.container3').fadeIn()
        $('.container3').css('animation', 'ddx 4s ease-in-out').addClass('kydj')
        var shijzb = setTimeout(() => {
            $('.container3').click(function () {
                clearTimeout(shijzb)
                $(this).addClass('xzydct3')
                container4()
            })
        }, 4000)
    }
    function container4() {
        $('.container4').fadeIn()
        $('.container4').css('animation', 'ddx 4s ease-in-out').addClass('kydj')
        var shijyb = setTimeout(() => {
            $('.container4').click(function () {
                clearTimeout(shijyb)
                $(this).addClass('xzydct4')
                container5()
            })
        }, 4000)
    }
    function container5() {
        var shubsj = setTimeout(() => {
            clearTimeout(shubsj)
            $('.container5').fadeIn()
        }, 3000)
    }
    $('.kaishibtnquy').click(function () {
        $('.container').hide();
        $('body').css('background-color', '#fff');
        $('.container2').show();
    })
    $('.ksyz').click(function () {
        $(this).fadeOut()
        shij()
    })
    var row = $('.container6').children('p').eq(0).text().split('');
    var row1 = $('.container6').children('div').eq(0).text().split('');
    var row2 = $('.container6').children('p').eq(1).text().split('');
    var row3 = $('.container6').children('p').eq(2).text().split('');
    $('.container6').children('p').eq(0).text('')
    $('.container6').children('div').eq(0).text('')
    $('.container6').children('p').eq(1).text('')
    $('.container6').children('p').eq(2).text('')
    $('.container5').click(() => {
        $('body').css('height', '200vh')
        $('body,html').stop().animate({ scrollTop: 1250 }, 1000)
        $('.container6').show()
        $('.container6').empty().append('<p></p><div></div><p></p><p></p>')
        var i = 0
        var wnzj = setInterval(() => {
            if (i >= row.length - 1) {
                clearInterval(wnzj)
                lygwz()
            }
            $('.container6').children('p').eq(0).text($('.container6').children('p').eq(0).text() + row[i])
            i++
        }, 300)
    })
    function lygwz() {
        var j = 0
        var wnzj = setInterval(() => {
            if (j >= row1.length - 1) {
                clearInterval(wnzj)
                lygwz1()
            }
            $('.container6').children('div').text($('.container6').children('div').text() + row1[j])
            j++
        }, 300)
    }
    function lygwz1() {
        var m = 0
        var wnzj = setInterval(() => {
            if (m >= row2.length - 1) {
                clearInterval(wnzj)
                lygwz2()
            }
            $('.container6').children('p').eq(1).text($('.container6').children('p').eq(1).text() + row2[m])
            m++
        }, 300)
    } function lygwz2() {
        var n = 0
        var wnzj = setInterval(() => {
            if (n >= row3.length - 1) {
                clearInterval(wnzj)
            }
            $('.container6').children('p').eq(2).text($('.container6').children('p').eq(2).text() + row3[n])
            n++
        }, 300)
    }
})
