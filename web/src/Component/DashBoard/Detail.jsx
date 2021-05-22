
import React, { useState } from 'react'

import { ActionBtn } from './Buttons'
import BlankImage from '../../Assets/blank.png'

import {
    UserDisplay,
    UserPicture
} from '../Profiles'

export function ParentTweet(props) {
    const { tweet } = props
    return tweet.parent ? <Tweet isRetweet retweeter={props.retweeter} hideActions className={' '} tweet={tweet.parent} /> : null
}
export function Tweet(props) {
    const { tweet, didRetweet, hideActions, isRetweet, retweeter } = props
    const [actionTweet, setActionTweet] = useState(props.tweet ? props.tweet : null)
    let className = props.className ? props.className : 'col-10 mx-auto col-md-6'
    className = isRetweet === true ? `${className} p-2 border rounded` : className
    const path = window.location.pathname
    const match = path.match(/(?<tweetid>\d+)/)
    const urlTweetId = match ? match.groups.tweetid : -1
    const isDetail = `${tweet.id}` === `${urlTweetId}`

    const handleLink = (event) => {
        event.preventDefault()
        window.location.href = `/${tweet.id}`
    }
    const handlePerformAction = (newActionTweet, status) => {
        if (status === 200) {
            setActionTweet(newActionTweet)
        } else if (status === 201) {
            if (didRetweet) {
                didRetweet(newActionTweet)
            }
        }

    }

    return <div class="flex border-b border-solid border-grey-light">
        <div class="w-1/8 text-right pl-3 pt-3">

            <div><a href="#"><img src={BlankImage} /></a></div>
        </div>
        <div class="w-7/8 p-3 pl-0">
            {/* <div class="text-xs text-grey-dark">Pinned Tweet</div> */}
            <div class="flex justify-between">
                <div>
                    <UserDisplay includeFullName user={tweet.user} />
                    {/* <span class="font-bold"><a href="#" class="text-black">Gagan Parmar</a></span>
                    <span class="text-grey-dark">@gagan123</span> */}
                    <span class="text-grey-dark">&middot;</span>
                    {/* <span class="text-grey-dark">16 May 2021</span> */}
                </div>
                <div>
                    <a href="#" class="text-grey-dark hover:text-teal"><i class="fa fa-chevron-down"></i></a>
                </div>
            </div>

            <div>
                <div class="mb-4">
                    {/* <p class="mb-6">🎉 My blogging website!</p> */}
                    <p class="mt-6">{tweet.content}</p>
                    <ParentTweet tweet={tweet} retweeter={tweet.user} />
                    {/* <p class="mb-4"><a href="#" class="text-teal">github.com/gaganparmar5567/ta...</a></p> */}
                    {/* <p><a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_tweet1.jpg" alt="tweet image" class="border border-solid border-grey-light rounded-sm" /></a></p> */}
                </div>
            </div>

            <div class="pb-2">
                {/* {(actionTweet && hideActions !== true) && <React.Fragment>
                        <ActionBtn tweet={actionTweet} didPerformAction={handlePerformAction} action={{ type: "like", display: "Likes" }} />
                        <ActionBtn tweet={actionTweet} didPerformAction={handlePerformAction} action={{ type: "unlike", display: "Unlike" }} />
                        <ActionBtn tweet={actionTweet} didPerformAction={handlePerformAction} action={{ type: "retweet", display: "Retweet" }} />
                </React.Fragment>
                        } */}
                <span class="mr-8"><a href="#" class="text-grey-dark hover:no-underline hover:text-red"><i class="fa fa-thumbs-up"></i> 0</a></span>
                <span class="mr-8"><a href="#" class="text-grey-dark hover:no-underline hover:text-blue-light"><i class="fa fa-thumbs-down"></i> 0</a></span>
                <span class="mr-8"><a href="#" class="text-grey-dark hover:no-underline hover:text-green"><i class="fa fa-retweet fa-lg mr-2"></i> 0</a></span>

                {/* <span class="mr-8"><a href="#" class="text-grey-dark hover:no-underline hover:text-teal"><i class="fa fa-envelope fa-lg mr-2"></i></a></span> */}
            </div>
        </div>
    </div>


    // <div className={className}>
    //     {isRetweet === true && <div className='mb-2'>
    //         <span className='small text-muted'>Retweet via Gagan</span>
    //         <UserDisplay user={retweeter} />
    //     </div>}
    //     <div className='d-flex'>

    //         <div className=''>
    //             <UserPicture user={tweet.user} />
    //         </div>
    //         <div className='col-11'>
    //             <div>

    //                 <p>
    //                     <UserDisplay includeFullName user={tweet.user} />
    //                 </p>
    //                 <p>{tweet.content}</p>

    //                 <ParentTweet tweet={tweet} retweeter={tweet.user} />
    //             </div>
    //             <div className='btn btn-group px-0'>
    //                 {(actionTweet && hideActions !== true) && <React.Fragment>
    //                     <ActionBtn tweet={actionTweet} didPerformAction={handlePerformAction} action={{ type: "like", display: "Likes" }} />
    //                     <ActionBtn tweet={actionTweet} didPerformAction={handlePerformAction} action={{ type: "unlike", display: "Unlike" }} />
    //                     <ActionBtn tweet={actionTweet} didPerformAction={handlePerformAction} action={{ type: "retweet", display: "Retweet" }} />
    //                 </React.Fragment>
    //                 }
    //                 {isDetail === true ? null : <button className='btn btn-outline-primary btn-sm' onClick={handleLink}>View</button>}
    //             </div>
    //         </div>
    //     </div>
    // </div>
}
