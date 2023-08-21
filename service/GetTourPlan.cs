using System.IO;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net.Http.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Abstractions;
using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Attributes;
using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Enums;
using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Resolvers;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace ITourPlanner.Service
{
    public class GetTourPlan
    {
        private readonly ILogger<GetTourPlan> _logger;
        private static readonly HttpClient _httpClient = new HttpClient();
        private static readonly string _apiKey = "MY_OPEN_AI_KEY";

        public GetTourPlan(ILogger<GetTourPlan> log)
        {
            _logger = log;
        }

        [FunctionName("GetTourPlan")]
        [OpenApiOperation(operationId: "Run", tags: new[] { "run" })]
        [OpenApiSecurity("function_key", SecuritySchemeType.ApiKey, Name = "code", In = OpenApiSecurityLocationType.Query)]
        [OpenApiRequestBody(contentType: "application/json; charset=utf-8", bodyType: typeof(GetTourPlanRequest), Description = "Sample Get Tour Plan Request", Required = true)]
        [OpenApiResponseWithBody(statusCode: HttpStatusCode.OK, contentType: "text/plain", bodyType: typeof(string), Description = "The OK response")]
        public async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "post", "get", Route = null)] HttpRequest req)
        {
            _logger.LogInformation("C# HTTP trigger function processed a request.");

            // Get the text from the request body
            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();

            dynamic data = JsonConvert.DeserializeObject(requestBody);
            string textToComplete = data?.text;

            // Prepare the data for the API request
            var requestData = new
            {
                prompt = textToComplete,
                max_tokens = 1000,
            };

            // Set the authorization header
            _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", _apiKey);

            // Make the API request
            var response = await _httpClient.PostAsJsonAsync(
            "https://api.openai.com/v1/engines/text-davinci-003/completions",
            requestData);

            // Get the response from the API
            var responseContent = await response.Content.ReadAsStringAsync();

            dynamic responseJson = JsonConvert.DeserializeObject(responseContent);
            string completionText = responseJson.choices[0].text;

            return new OkObjectResult(completionText);
        }
    }

    [OpenApiExample(typeof(GetTourPlanRequestExample))]
    public class GetTourPlanRequest
    {
        /// <summary>The text to complete</summary>
        [OpenApiProperty]
        public string Text { get; set; }
    }
    public class GetTourPlanRequestExample : OpenApiExample<GetTourPlanRequest>
    {
        public override IOpenApiExample<GetTourPlanRequest> Build(NamingStrategy namingStrategy = null)
        {
            Examples.Add(
                 OpenApiExampleResolver.Resolve(
                     "GetTourPlanRequestExample",
                     new GetTourPlanRequest()
                     {
                         Text = "Best places to visit in Madrid",
                     },
                     namingStrategy
                 ));
            return this;
        }
    }
}

