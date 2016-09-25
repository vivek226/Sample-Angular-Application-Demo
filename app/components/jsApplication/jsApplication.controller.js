/**
 * Created by Vivek on 9/17/2016.
 */
'use strict';

angular.module('jsApplication').controller('jsApplicationController',['$scope','dictionary','messages','$interpolate',jsApplicationCtrl]);
function jsApplicationCtrl($scope,dictionary,messages,$interpolate){
    var scope = this;
    scope.showOutput = false;
    scope.translated={};
    scope.fromDictionary=[];
    /**
     * @method:translate
     * To translate english word to pigLatin
     * 
     */
    scope.translate = function(input){
        var words = input.replace(/\n/g,' ').split(' ');
        var index = 0;
        var dictionaryWords = [];
        var translatedWord={};
        while(index < words.length){
            var currentWord = words[index];
            if(currentWord == '') {
                index++;
                continue;
            }
            var lowerCaseWord = currentWord.toLowerCase();
            var explanation = null;
            if(dictionary.hasOwnProperty(lowerCaseWord)){ // checking the dictionary if the word already exists
                words[index] = dictionary[lowerCaseWord].word;
                explanation = dictionary[lowerCaseWord].explanation;
                translatedWord[currentWord]={word:words[index],explanation:explanation};
                dictionaryWords.push(currentWord);
                index++;
                continue;
            }
            var position = currentWord.search(/[aeiou]/);
            if(position == 0){ // if the word starts with vowels
                explanation = $interpolate(messages.vowel)({vowel:currentWord.charAt(0)});
                words[index]=currentWord+"way";
            }else { // if the word starts with a consonant/consonant cluster
                if (position < 0)
                    explanation = $interpolate(messages['no-vowel'])({consonant: currentWord});
                else
                    explanation = $interpolate(messages.consonant)({
                        consonant: currentWord.substring(0, position),
                        findings: (position == 1) ? 'initial consonant: ' : 'consonant cluster: '
                    });
                words[index] = currentWord.substring(position) + currentWord.substring(0, position) + "ay";
            }
            // push the translated word into the dictionary.
            dictionary[lowerCaseWord]={
                word: words[index],
                explanation: explanation
            };
            translatedWord[currentWord]={word:words[index],explanation:explanation};
            index++;
        }

        scope.showOutput= true;
        scope.translated = {dictionary:dictionaryWords,normal:translatedWord};
    };
    /**
     * @method:clear
     * To show/hide outupt wrapper based on input length.
     */
    scope.clear = function(input){
        if(angular.isUndefined(input))
            scope.showOutput = false;
    };
};




