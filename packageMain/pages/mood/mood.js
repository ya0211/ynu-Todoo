// packageMain/pages/mood/mood.js

import {
    getMonth
} from '../../../utils/utils.js'

const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        /* Self */
        openid: app.globalData.userInfoList.openid,

        /* 月份 */
        month: getMonth(),

        /* Operate */
        operateList: ['left', 'right'],

        /* Feeling选项 */
        feelingList: [{
            text: 'great',
            icon: '/pages/mood/resources/feeling/great.svg',
        }, {
            text: 'loving',
            icon: '/pages/mood/resources/feeling/loving.svg',
        }, {
            text: 'good',
            icon: '/pages/mood/resources/feeling/good.svg',
        }, {
            text: 'meh',
            icon: '/pages/mood/resources/feeling/meh.svg',
        }, {
            text: 'not good',
            icon: '/pages/mood/resources/feeling/notgood.svg',
        }, {
            text: 'very bad',
            icon: '/pages/mood/resources/feeling/verybad.svg',
        }, ],

        /* Recent测试用数据 */
        recentList: {
            '2022-06': [{
                date: '2022-06-01 14:30:20',
                feeling: 0
            }, {
                date: '2022-06-02 15:33:10',
                feeling: 2
            }, {
                date: '2022-06-03 09:00:13',
                feeling: 3
            }, {
                date: '2022-06-04 22:13:00',
                feeling: 5
            }, ],
            '2022-07': [{
                date: '2022-07-01 14:30:20',
                feeling: 4
            }, {
                date: '2022-07-02 15:33:10',
                feeling: 0
            }, {
                date: '2022-07-03 09:00:13',
                feeling: 1
            }, {
                date: '2022-07-04 22:13:00',
                feeling: 4
            }, {
                date: '2022-07-05 20:03:00',
                feeling: 1
            }, {
                date: '2022-07-06 02:13:00',
                feeling: 2
            }, {
                date: '2022-07-07 02:00:00',
                feeling: 0
            }, {
                date: '2022-07-08 00:03:00',
                feeling: 3
            }],
            '2022-08': [{
                date: '2022-08-01 14:30:20',
                feeling: 3
            }]
        },
    },

    /**
     * 点击事件--选择月份
     */
    bindMonthChange(e) {
        this.setData({
            month: e.detail.value
        })
    },

    /**
     * 点击事件--快捷操作
     */
    bindOperateTap(e) {
        const operateList = this.data.operateList
        const index = e.currentTarget.dataset.index

        switch (operateList[index]) {
            case 'left':
                this.operateLeft()
                break
            case 'right':
                this.operateRight()
                break
        }
    },
    operateLeft() {
        var month = this.data.month
        let y = Number(month.split('-')[0])
        let m = Number(month.split('-')[1]) - 1

        month = this.formatMonth(y, m)
        this.setData({
            month: month
        })
    },
    operateRight() {
        var month = this.data.month
        let y = Number(month.split('-')[0])
        let m = Number(month.split('-')[1]) + 1
        
        month = this.formatMonth(y, m)
        this.setData({
            month: month
        })
    },
    formatZeroNumber(m) {
        if (m < 10) {
            m = '0' + String(m)
        } else {
            m = String(m)
        }
        return m
    },
    formatMonth(y, m) {
        if (1 <= m & m <= 12) {
            m = this.formatZeroNumber(m)
            return String(y) + '-' + m
        } else if (m == 0) {
            y -= 1
            m = this.formatZeroNumber(12 + m)
            return String(y) + '-' + m
        } else if (m == 13) {
            y += 1
            m = this.formatZeroNumber(m - 12)
            return String(y) + '-' + m
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log({
            openid: this.data.openid
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})