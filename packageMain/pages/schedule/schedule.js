// packageMain/pages/schedule/schedule.js

import {
    getDay
} from '../../../utils/utils.js'

const MAX_LENGTH = 30
const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        /* Self */
        openid: app.globalData.userInfoList.openid,

        /* 日期 */
        date: getDay(),

        /* Operate */
        operateList: ['add', 'remove', 'refresh', 'upload'],

        /* 任务清单 */
        todoList: [{
            "name": null,
            "time": '00:00'
        }, ],

    },

    /**
     * 点击事件--选择日期
     */
    bindDateChange(e) {
        this.setData({
            date: e.detail.value
        })
    },

    /**
     * 点击事件--输入
     */
    bindKeyInput(e) {
        const todoList = this.data.todoList
        const index = e.currentTarget.dataset.index

        todoList[index].name = e.detail.value
        this.setData({
            todoList: todoList
        })
    },

    /**
     * 点击事件--选择时间
     */
    bindTimeChange(e) {
        const todoList = this.data.todoList
        const index = e.currentTarget.dataset.index

        todoList[index].time = e.detail.value
        this.setData({
            todoList: todoList
        })
    },

    /**
     * 点击事件--表单操作
     */
    bindOperateTap(e) {
        const operateList = this.data.operateList
        const index = e.currentTarget.dataset.index

        switch (operateList[index]) {
            case 'add':
                this.operateAdd()
                break
            case 'remove':
                this.operateRemove()
                break
            case 'refresh':
                this.operateRefresh()
                break
            case 'upload':
                this.operateUpload()
        }
    },
    operateAdd() {
        const todoList = this.data.todoList

        if (todoList.length < MAX_LENGTH) {
            todoList.push({
                "name": null,
                "time": '00:00'
            })
            this.setData({
                todoList: todoList
            })
        } else {
            wx.showToast({
                title: `MAX: ${todoList.length}`,
                icon: 'none',
                duration: 1000
            })
        }
    },
    operateRemove() {
        const todoList = this.data.todoList

        if (todoList.length > 1) {
            todoList.pop()
            this.setData({
                todoList: todoList
            })
        }
    },
    operateRefresh() {
        const todoList = this.data.todoList

        for (let i = 0; i < todoList.length; i++) {
            todoList[i] = {
                "name": null,
                "time": '00:00'
            }
        }
        this.setData({
            todoList: todoList
        })
    },
    operateUpload() {
        const openid = this.data.openid
        const date = this.data.date
        const todoList = this.data.todoList
        
        console.log({
            openid: openid,
            id: date,
            data: todoList
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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