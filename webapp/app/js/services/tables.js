/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

KylinApp.factory('TableService', ['$resource', function ($resource, config) {
  return $resource(Config.service.url + 'tables/:tableName/:action/:database', {}, {
    list: {method: 'GET', params: {}, cache: true, isArray: true},
    get: {method: 'GET', params: {}, isArray: false},
    getExd: {method: 'GET', params: {action: 'exd-map'}, isArray: false},
    reload: {method: 'PUT', params: {action: 'reload'}, isArray: false},
    loadHiveTable: {method: 'POST', params: {}, isArray: false},
    unLoadHiveTable: {method: 'DELETE', params: {}, isArray: false},
    addStreamingSrc: {method: 'POST', params: {action:'addStreamingSrc'}, isArray: false},
    genCardinality: {method: 'PUT', params: {action: 'cardinality'}, isArray: false},
    showHiveDatabases: {method: 'GET', params: {action:'hive'}, cache: true, isArray: true},
    showHiveTables: {method: 'GET', params: {action:'hive'}, cache: true, isArray: true}
  });
}]);
