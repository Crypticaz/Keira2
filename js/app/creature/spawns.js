/*jslint browser: true, eqeq: true,  white: true, plusplus: true */
/*global angular, console, alert*/

(function () {
  'use strict';

  var app = angular.module('keira2');

  app.controller("CreatureSpawnsController", function ($scope, $rootScope, $stateParams) {

    /* At start we have no row selected */
    $scope.selectedRow = -1;

    /* The row currently selected by the user (bound to the view) */
    $scope.selected = {
      guid            	: 0,
      id              	: parseInt($stateParams.id, 10),
      map             	: 0,
      phaseMask			    : 0,
      spawnDifficulties : 1,
      PhaseId			      : 0,
      PhaseGroup		    : 0,
      modelid         	: 0,
      equipment_id    	: 0,
      position_x      	: 0,
      position_y      	: 0,
      position_z      	: 0,
      orientation     	: 0,
      spawntimesecs     : 120,
      spawntimesecsmax  : 120,
      corpseRemoveTime	: 120,
      currentwaypoint 	: 0,
      curhealth       	: 1,
      curmana         	: 0,
      MovementType    	: 0,
      spawndist       	: 0,
      npcflag           : 0,
      npcflag2         	: 0,
      unit_flags		    : 0,
      unit_flags2       : 0,
      flags_extra       : 0,
      dynamicflags    	: 0,
      eventEntry        : 0,
      pool_entry        : 0,
      terrainSwapMap    : -1,
      phaseUseFlags     : 0,
      zone            	: 0,
      area            	: 0,
      areaGroupId       : 0,
      VerifiedBuild     : 0
    };

    /* Type check */
    $scope.parseValues = function() {

      $scope.selected.guid            		= parseInt($scope.selected.guid, 10);
      $scope.selected.map             		= parseInt($scope.selected.map, 10);
      $scope.selected.phaseMask       		= parseInt($scope.selected.phaseMask, 10);
      $scope.selected.spawnDifficulties		= parseInt($scope.selected.spawnDifficulties, 10);
      $scope.selected.PhaseId             = parseInt($scope.selected.PhaseId, 10);
      $scope.selected.PhaseGroup          = parseInt($scope.selected.PhaseGroup, 10);
      $scope.selected.modelid         		= parseInt($scope.selected.modelid, 10);
      $scope.selected.equipment_id    		= parseInt($scope.selected.equipment_id, 10);
      $scope.selected.position_x      		= parseFloat($scope.selected.position_x, 10);
      $scope.selected.position_y      		= parseFloat($scope.selected.position_y, 10);
      $scope.selected.position_z      		= parseFloat($scope.selected.position_z, 10);
      $scope.selected.orientation     		= parseFloat($scope.selected.orientation, 10);
      $scope.selected.spawntimesecs   		= parseInt($scope.selected.spawntimesecs, 10);
      $scope.selected.spawntimesecsmax		= parseInt($scope.selected.spawntimesecsmax, 10);
      $scope.selected.corpseRemoveTime		= parseInt($scope.selected.corpseRemoveTime, 10);
      $scope.selected.currentwaypoint 		= parseInt($scope.selected.currentwaypoint, 10);
      $scope.selected.curhealth       		= parseInt($scope.selected.curhealth, 10);
      $scope.selected.curmana         		= parseInt($scope.selected.curmana, 10);
      $scope.selected.MovementType    		= parseInt($scope.selected.MovementType, 10);
      $scope.selected.spawndist       		= parseFloat($scope.selected.spawndist, 10);
      $scope.selected.npcflag         		= parseInt($scope.selected.npcflag, 10);
      $scope.selected.npcflag2         		= parseInt($scope.selected.npcflag2, 10);
      $scope.selected.unit_flags         	= parseInt($scope.selected.unit_flags, 10);
      $scope.selected.unit_flags2         = parseInt($scope.selected.unit_flags2, 10);
      $scope.selected.flags_extra      		= parseInt($scope.selected.flags_extra, 10);
      $scope.selected.dynamicflags    		= parseInt($scope.selected.dynamicflags, 10);
      $scope.selected.eventEntry        	= parseInt($scope.selected.eventEntry, 10);
      $scope.selected.pool_entry         	= parseInt($scope.selected.pool_entry, 10);
      $scope.selected.terrainSwapMap      = parseInt($scope.selected.terrainSwapMap, 10);
      $scope.selected.phaseUseFlags       = parseInt($scope.selected.phaseUseFlags, 10);
      $scope.selected.zone            		= parseInt($scope.selected.zone, 10);
      $scope.selected.area            		= parseInt($scope.selected.area, 10);
      $scope.selected.areaGroupId         = parseInt($scope.selected.areaGroupId, 10);
      $scope.selected.VerifiedBuild   		= parseInt($scope.selected.VerifiedBuild, 10);

    };

    /* Select a row from collection */
    $scope.selectRow = function(rows, index) {
      $scope.selectedRow = index;
      $scope.selected = angular.copy(rows[index]);
    };

    /* Edit selected row */
    $scope.editSelectedRowOf = function(rows, primaryKey2) {
      if (!$scope.isEntrySelected()) { return; }
      var i;
      $scope.parseValues();

      // check primaryKey2 uniqueness
      for (i = 0; i < rows.length; i++) {
        if ( (rows[i][primaryKey2] == $scope.selected[primaryKey2]) && (i !== $scope.selectedRow) ) {
          alert("Duplicate row with `" + primaryKey2 + "` = " + $scope.selected[primaryKey2]);
          return;
        }
      }

      rows.splice($scope.selectedRow, 1, angular.copy($scope.selected));
    };

    /* Delete selected row from collection */
    $scope.deleteSelectedRowFrom = function(rows) {
      if (!$rootScope.isEntrySelected()) { return; }

      rows.splice($scope.selectedRow, 1);
    };

    /* Add selected row to collection */
    $scope.addRowTo = function(rows, primaryKey2) {
      if (!$rootScope.isEntrySelected()) { return; }
      var i;
      $scope.parseValues();

      // check primaryKey2 uniqueness
      for (i = 0; i < rows.length; i++) {
        if (rows[i][primaryKey2] == $scope.selected[primaryKey2]) {
          alert("Duplicate row with `" + primaryKey2 + "` = " + $scope.selected[primaryKey2]);
          return;
        }
      }

      rows.splice(0, 0, angular.copy($scope.selected));
    };

  });

  app.controller("SpawnsAddonController", function ($scope, $rootScope, $stateParams) {

    /* At start we have no row selected */
    $scope.selectedRow = -1;

    /* The row currently selected by the user (bound to the view) */
    $scope.selected = {
      guid              : 0,
      path_id           : 0,
      mount             : 0,
      bytes1            : 0,
      bytes2            : 0,
      emote             : 0,
      aiAnimKit         : 0,
      movementAnimKit   : 0,
      meleeAnimKit      : 0,
      auras             : ""
    };

    /* Type check */
    $scope.parseValues = function() {
      $scope.selected.guid            = parseInt($scope.selected.guid, 10);
      $scope.selected.path_id         = parseInt($scope.selected.path_id, 10);
      $scope.selected.mount           = parseInt($scope.selected.mount, 10);
      $scope.selected.bytes1          = parseInt($scope.selected.bytes1, 10);
      $scope.selected.bytes2          = parseInt($scope.selected.bytes2, 10);
      $scope.selected.emote           = parseInt($scope.selected.emote, 10);
      $scope.selected.aiAnimKit       = parseInt($scope.selected.aiAnimKit, 10);
      $scope.selected.movementAnimKit = parseInt($scope.selected.movementAnimKit, 10);
      $scope.selected.meleeAnimKit    = parseInt($scope.selected.meleeAnimKit, 10);

    };

    /* Select a row from collection */
    $scope.selectRow = function(rows, index) {
      $scope.selectedRow = index;
      $scope.selected = angular.copy(rows[index]);
    };

    /* Edit selected row */
    $scope.editSelectedRowOf = function(rows, primaryKey2) {
      if (!$scope.isEntrySelected()) { return; }
      var i;
      $scope.parseValues();

      // check primaryKey2 uniqueness
      for (i = 0; i < rows.length; i++) {
        if ( (rows[i][primaryKey2] == $scope.selected[primaryKey2]) && (i !== $scope.selectedRow) ) {
          alert("Duplicate row with `" + primaryKey2 + "` = " + $scope.selected[primaryKey2]);
          return;
        }
      }

      rows.splice($scope.selectedRow, 1, angular.copy($scope.selected));
    };

    /* Delete selected row from collection */
    $scope.deleteSelectedRowFrom = function(rows) {
      if (!$rootScope.isEntrySelected()) { return; }

      rows.splice($scope.selectedRow, 1);
    };

    /* Add selected row to collection */
    $scope.addRowTo = function(rows, primaryKey2) {
      if (!$rootScope.isEntrySelected()) { return; }
      var i;
      $scope.parseValues();

      // check primaryKey2 uniqueness
      for (i = 0; i < rows.length; i++) {
        if (rows[i][primaryKey2] == $scope.selected[primaryKey2]) {
          alert("Duplicate row with `" + primaryKey2 + "` = " + $scope.selected[primaryKey2]);
          return;
        }
      }

      rows.splice(0, 0, angular.copy($scope.selected));
    };

  });

}());
