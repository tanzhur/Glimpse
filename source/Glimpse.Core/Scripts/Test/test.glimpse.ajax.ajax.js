﻿ajax = function () {
    var result = [],
        possibleResults = [{ method : 'Get', duration : 213, browser : '', clientName : '', requestTime : '2011/11/09 12:00:12', requestId : 'sadsad', isAjax : true, url : '/News'},
            { method : 'Get', duration : 123, browser : '', clientName : '', requestTime : '2011/11/09 12:10:34', requestId : 'gfdsgf', isAjax : true, url : '/Shares'},
            { method : 'Get', duration : 234, browser : '', clientName : '', requestTime : '2011/11/09 12:12:23', requestId : '324', isAjax : true, url : '/Order/230'},
            { method : 'Post', duration : 342, browser : '', clientName : '', requestTime : '2011/11/09 12:17:52', requestId : 'asd', isAjax : true, url : '/Order/Add'},
            { method : 'Post', duration : 211, browser : '', clientName : '', requestTime : '2011/11/24 12:00:35', requestId : 'kmk', isAjax : true, url : '/History/Results'},
            { method : 'Post', duration : 242, browser : '', clientName : '', requestTime : '2011/11/09 12:27:23', requestId : 'sdf', isAjax : true, url : '/News/List'},
            { method : 'Get', duration : 1234, browser : '', clientName : '', requestTime : '2011/11/09 12:29:14', requestId : 'zcxcv', isAjax : true, url : '/News'}],
        index = 0,
        generate = function (data) {  
            if (index < 6)
             result.push(possibleResults[index++]);
            return result;
        },
        trigger = function (param) { 
            setTimeout(function () {
                var success = (Math.floor(Math.random() * 11) != 10);
                param.complete(null, (success ? 'Success' : 'Fail'));
                if (success)
                    param.success(generate(param.data));
            }, 300);
        };

    return {
        trigger : trigger
    };
} ()