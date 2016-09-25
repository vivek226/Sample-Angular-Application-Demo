/**
 * Created by Vivek on 9/17/2016.
 */
'use strict';

angular.module('jsApplication',['ngRoute'])
    .constant('messages',{
        'vowel':"Since the word starts with the vowel: \'{{vowel}}\', the word is suffixed with 'way'",
        'consonant':"Since the word starts with consonant sounds, the {{findings}} \'{{consonant}}\' is removed and the word is suffixed with the same and 'ay' is added at the end.",
        'no-vowel':"Since the word {{consonant}} contains no vowel, the entire consonant cluster is suffixed with 'ay'"
    })
    .value('dictionary',{});