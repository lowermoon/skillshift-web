import anime from "animejs";
import { useEffect } from "react";

export default function CirclesBg ({ position }) {

    useEffect(() => {
        anime.timeline({
            duration: 2000,
            easing: 'spring(1, 80, 10, 0)',
        })
        .add({
            targets: '#circle_4',
            translateX: ['-50%', '-50%'],
            translateY: ['-50%', '-50%'],
            scale: [0, 1],
        }).add({
            targets: '#circle_3',
            translateX: ['-50%', '-50%'],
            translateY: ['-50%', '-50%'],
            scale: [0, 1],
        }, '-=1600').add({
            targets: '#circle_2',
            translateX: ['-50%', '-50%'],
            translateY: ['-50%', '-50%'],
            scale: [0, 1],
        },'-=1600').add({
            targets: '#circle_1',
            translateX: ['-50%', '-50%'],
            translateY: ['-50%', '-50%'],
            scale: [0, 1],
        },'-=1600');

        anime.timeline({
            duration: 2000,
            easing: 'spring(1, 80, 10, 0)',
        })
        .add({
            targets: '#circle2_4',
            translateX: ['50%', '50%'],
            translateY: ['50%', '50%'],
            scale: [0, 1],
        }).add({
            targets: '#circle2_3',
            translateX: ['50%', '50%'],
            translateY: ['50%', '50%'],
            scale: [0, 1],
        }, '-=1600').add({
            targets: '#circle2_2',
            translateX: ['50%', '50%'],
            translateY: ['50%', '50%'],
            scale: [0, 1],
        }, '-=1600').add({
            targets: '#circle2_1',
            translateX: ['50%', '50%'],
            translateY: ['50%', '50%'],
            scale: [0, 1],
        }, '-=1600');
    }, [])
        // anime.timeline({
        //     duration: 700,
        //     easing: 'easeInOutQuad',
        // }).add({
        //     targets: '#circle',
        //     translateX: ['-50%', '-50%'],
        //     translateY: ['-50%', '-50%'],
        //     scale: [0, 1],
        // })

    if(position === 'top left') {
        return (
            <>
                <div id="circle_1" className="absolute top-0 left-0 w-[800px] h-[800px] bg-transparent ring-[20px] ring-rose-300 rounded-full -translate-x-[50%] -translate-y-[50%] z-[1]"></div>
                <div id="circle_2" className="absolute top-0 left-0 w-[600px] h-[600px] bg-transparent ring-[40px] ring-zinc-50 rounded-full -translate-x-[50%] -translate-y-[50%] z-[1]"></div>
                <div id="circle_3" className="absolute top-0 left-0 w-[350px] h-[350px] bg-transparent ring-[70px] ring-rose-300 rounded-full -translate-x-[50%] -translate-y-[50%] z-[1]"></div>
                <div id="circle_4" className="absolute top-0 left-0 w-[250px] h-[250px] bg-transparent bg-rose-500 rounded-full -translate-x-[50%] -translate-y-[50%] z-[1]"></div>
            </>
        )
    }

    if(position === 'bottom right') {
        return (
            <>
                <div id="circle2_1" className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-transparent ring-[20px] ring-zinc-50 rounded-full translate-x-[50%] translate-y-[50%] z-[1]"></div>
                <div id="circle2_2" className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-transparent ring-[40px] ring-rose-300 rounded-full translate-x-[50%] translate-y-[50%] z-[1]"></div>
                <div id="circle2_3" className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-transparent ring-[70px] ring-zinc-50 rounded-full translate-x-[50%] translate-y-[50%] z-[1]"></div>
                <div id="circle2_4" className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-transparent bg-rose-500 rounded-full translate-x-[50%] translate-y-[50%] z-[1]"></div>
            </>
        )
    }
}